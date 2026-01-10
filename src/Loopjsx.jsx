function Loop(){

    const userData =[
        {
            name :"Anila Sindhu",
            age:"22",
            Email:"anil@gmail.com",
            id:1
        },
        {
            name :"Sindhu ji",
            age:"23",
            Email:"sindhu@gmail.com",
            id:2
        },
        {
            name :"shivi",
            age:"24",
            Email:"shivi@gmail.com",
            id:3
        },
        {
            name :"tanu",
            age:"25",
            Email:"tanu@gmail.com",
            id:4
        }
    ]
    return (
        <div>

            <h1>Loop in JSX Array Obj And Map Function</h1>
            <h2>Dummy Data / Without loop</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <td>name</td>
                        <td>age</td>
                        <td>Email</td>
                        <td>id</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Anil sindhu</td>
                    <td>22</td>
                    <td>anil@gmail.com</td>
                    <td>1</td>
                    </tr>

                    <tr>
                    <td>Anil sindhu</td>
                    <td>22</td>
                    <td>anil@gmail.com</td>
                    <td>1</td>
                    </tr>
                    <tr>
                    <td>Anil sindhu</td>
                    <td>22</td>
                    <td>anil@gmail.com</td>
                    <td>1</td>
                    </tr>
                    <tr>
                    <td>Anil sindhu</td>
                    <td>22</td>
                    <td>anil@gmail.com</td>
                    <td>1</td>
                    </tr>
                </tbody>

</table>
<h1>Data with loop Loop in Jsx </h1>
<table border ={1}>
    <thead>
        <tr>
        <td>Id</td>
        <td>name</td>
        <td>age</td>
        <td>email</td>
    </thead>
    <tbody>
        {
            userData.map((user)=>(
                 <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>{user.Email}</td>
        </tr>

            ))
        }
        
    </tbody>

</table>
        </div>
    )
}

export default Loop;