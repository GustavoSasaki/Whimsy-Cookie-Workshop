export function SkipNav(){
    return (
        <a tabIndex={0} 
        className="absolute focus:top-0 -top-full left-0 bg-gradient-to-br text-white from-red-400 to-red-500 z-50 transition-all pb-1 px-1 rounded-ee-sm"
            href="#main-content"
        >
           Skip to main content
        </a>
    )
}