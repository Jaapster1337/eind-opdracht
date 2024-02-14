export function displayUsers(data) {
    return (
        data.map((user, index) => (
            <div key={index} className="user-info-wrapper">
                <p>ID: {user.id}</p>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
            </div>
        )))
}