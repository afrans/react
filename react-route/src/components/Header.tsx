type HeaderProps = { title?: string }

export default function Header({ title = 'Meu App' }: HeaderProps) {
    return (
        <header style={{ padding: 16, borderBottom: '1px solid #ddd' }}>
            <h1>{title}</h1>
        </header>
    )
}
