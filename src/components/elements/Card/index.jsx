export const Card = (props) => {
    const { title, description } = props
    return (
        <div className="flex flex-col bg-[#F5F5DC] hover:bg-[#FFF9C4] gap-6 border-2 border-[#FF6F61] p-3 rounded-xl">
            <p className="text-xl">{title}</p>
            <p className="text-lg">{description}</p>
        </div>
    )
}