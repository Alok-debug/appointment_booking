const ul=document.getElementById('users')
const form=document.getElementById('form');
const fullname=document.getElementById('name');
const email=document.getElementById('email');
ul.style.alignContent='center'
document.addEventListener('DOMContentLoaded',()=>{
    axios.get('http://localhost:5000/getusers')
    .then((res)=>{
        res.data.forEach(user=>{
            const li=document.createElement('li');
            li.innerHTML=`${user.name} : ${user.email} <button onclick="editUser(${user.id})">EDIT</button><button onclick="deleteUser(${user.id})">Delete</button>`
            ul.appendChild(li);
        })
    })
    .catch(err=>{
        console.log(err)
    })
})

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const obj={
        "name":fullname.value,
        "email":email.value
    }
    fullname.value='';
    email.value='';
    axios.post('http://localhost:5000/addnewuser',obj)
    .then((user)=>{
        const li=document.createElement('li');
        li.innerHTML=`${user.data.name} : ${user.data.email} <button onclick="editUser(${user.data.id})">EDIT</button><button onclick="deleteUser(${user.data.id})">Delete</button>`
        ul.appendChild(li);
    })
    .catch(err=>{
    console.log(err)
    })
})

function deleteUser(id){
    ul.removeChild(event.target.parentElement);
    axios.delete(`http://localhost:5000/deleteuser/${id}`)
    .then()
    .catch(err=>{
        console.log(err)
    })
}

function editUser(id) {
    axios.get(`http://localhost:5000/editUser/${id}`)
        .then((data) => {
            console.log(data);
        
    })
    .catch(err=>{
        console.log(err)
    })
    
}