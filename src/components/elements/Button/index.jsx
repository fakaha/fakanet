export const Button = (props) => {
    const { variant, font, children = '...', link } = props
    return (
        <button onClick={() => window.open(link, 'blank')} className={`h-10 px-6 rounded-lg font-medium ${variant} ${font}`}>
            {children}
        </button>
    )
}