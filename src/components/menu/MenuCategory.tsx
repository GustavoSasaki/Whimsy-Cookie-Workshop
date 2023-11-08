export function MenuCategory({ title,underscoreColor, children }: { title: string,underscoreColor:string, children: JSX.Element[] }) {
    return (
        <div>
            <div className="relative inline [&_*]:inline">
                <h3 className={`z-10 relative font-bold text-4xl pb-2 uppercase`}>{title}</h3>
                <div className={`absolute ${underscoreColor} bottom-[-1px] h-[8px]`}
                    style={{
                        left: `-${10 / 2}px`,
                        width: `calc(100% + 10px)`
                    }}
                />
            </div>
            {children}
        </div>
    )
}
