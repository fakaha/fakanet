export const ContactInfo = (props) => {
    const { icon, contact, link } = props
    return (
        <div onClick={() => window.open(link, 'blank')} className="flex gap-3 hover:cursor-pointer">
            <img className="w-[25px]" src={icon} alt="icon" />
            <p>{contact}</p>
        </div>
    )
}