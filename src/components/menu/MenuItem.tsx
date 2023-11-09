import { MenuItemImg } from "./MenuItemImg"

export interface Recipe {
    name: string
    description: string
    price: string
    img?: string
}

export function MenuItem({ name, description, price, img }: Recipe) {

    return (
        <div className={`flex gap-8  justify-between my-3 items-start py-4`}>

            <div className="grow">
                <div className="flex flex-row justify-between text-2xl text-cookie-dark max-w-[650px]">
                    <p className="font-medium ">{name}</p>
                    <div className="grow mx-[13px] h-full mt-5"
                        style={{
                            borderColor: 'rgba(47 32 19,0.72)',
                            borderTop: '1px #000',
                            borderLeft: '1px #000',
                            borderRight: '5px #000',
                            borderBottom: "4px dotted",
                        }}
                    />
                    <p className="text-xl"><span className="pr-1">R$</span>{price}</p>
                </div>
                <p className="font-normal max-w-[40ch]">{description}</p>
            </div>
            <div className="w-[195px] relative">
                {img &&
                    <MenuItemImg name={name} img={img} />
                }
            </div>
        </div>
    )
}