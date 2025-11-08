type UserCardProps = {
    name: string
    role?: string
}

export default function UserCard({ name, role = 'Usuário' }: UserCardProps) {
    return (
        <div className="card">
            <strong>{name}</strong>
            <p>{role}</p>
        </div>
    )
}
