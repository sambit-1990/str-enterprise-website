import asyncio
import os
import base64
from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage

load_dotenv('/app/backend/.env')
api_key = os.getenv('EMERGENT_LLM_KEY')

PROMPT = (
    "Ultra-realistic professional food photography of dehydrated onion powder. "
    "A rustic dark-wooden bowl at center filled with a neat mound of light rosy-pink dehydrated red onion powder. "
    "Surrounding the bowl: two whole red/purple onions with papery skins, a halved red onion showing pink-purple rings, "
    "a few loose onion slices, and a small wooden scoop with more onion powder spilling onto a burlap jute sack. "
    "The bowl rests on the burlap sack over a warm rustic wooden plank table. Soft natural window light from the top-right, "
    "shallow depth of field, warm golden hour tones, no text, no logo, no watermark. "
    "Match the exact bowl style and composition of these companion product photos: garlic powder in a dark wooden bowl on burlap "
    "with garlic bulbs and cloves, and turmeric powder in a dark wooden bowl with turmeric roots and green leaves. "
    "Same lighting, same wooden background tone, same rustic warm mood, same camera angle (slightly above eye level, front 3/4 view). "
    "High resolution, sharp focus on powder texture, magazine-quality food photography."
)

async def main():
    chat = LlmChat(api_key=api_key, session_id='onion-gen-1', system_message='You generate photorealistic product photos.')
    chat.with_model('gemini', 'gemini-3-pro-image-preview').with_params(modalities=['image', 'text'])
    msg = UserMessage(text=PROMPT)
    text, images = await chat.send_message_multimodal_response(msg)
    print('Text:', (text or '')[:200])
    if not images:
        print('No images generated')
        return
    out_dir = '/app/frontend/public/generated'
    os.makedirs(out_dir, exist_ok=True)
    for i, img in enumerate(images):
        image_bytes = base64.b64decode(img['data'])
        path = f"{out_dir}/onion_powder.png"
        with open(path, 'wb') as f:
            f.write(image_bytes)
        print('Saved:', path, 'bytes:', len(image_bytes))
        break

asyncio.run(main())
