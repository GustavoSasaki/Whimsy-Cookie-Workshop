import Image from 'next/image'

export function JustChill() {
    return (
        <section
            className="min-h-screen text-cookie pb-8"
            aria-labelledby="chill-title"
        >
            <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-[5%] lg:gap-[10%]">
                <div className="w-full md:w-2/5 px-[var(--container-padding)] md:px-0 my-auto">

                    <div className="relative w-full mx-auto max-h-[400px] md:max-h-[700px] aspect-square">
                        <Image
                            src={imgUrl}
                            className="relative rounded-lg object-cover"
                            alt="white cookies"
                            fill={true}
                        />
                    </div>
                </div>
                <div className="px-[var(--container-padding)]">
                    <h2
                        className="uppercase text-6xl text-introduction-light font-bold"
                        id="chill-title"
                    >Just <span className="text-introduction">chill</span></h2>

                    <p className="md:max-w-[45ch] pt-8 md:pt-12 text-2xl font-medium">
                        {text}
                    </p>
                    <p className="pt-7 md:max-w-[45ch] text-2xl font-medium">
                        {text2}
                    </p>
                </div>
            </div>
        </section>
    )
}

const imgUrl = 'https://ngchltiyfhxkbpitthto.supabase.co/storage/v1/object/public/cookies-sanca/justChill.jpg'
const text = "Discover a whimsical haven where the air is infused with the comforting aroma of freshly baked cookies, and the ambiance invites you to linger, laugh, and indulge in the magic of timeless moments."
const text2 = "Whimsy Cookie Workshop is not just a destination; it's an experience of joy and delicious nostalgia"