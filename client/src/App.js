import { useState } from "react";



function App() {
      const [form,setForm]=useState({
        amount:0,
        description:"",
        date:""
      });

        function handlinput(e){
          console.log(e.target.value);
          setForm({...form,[e.target.name]:e.target.value});
        }
        
       async function handleSubmit(e){
          e.preventDefault();
         const res = await fetch("http://localhost:4000/transaction",{
            method:"POST",
            body:form,
          });
          console.log(form);
          console.log(res);
        }
       

  return (
    <div>
      <h1> form </h1>
       <form onSubmit={handleSubmit}>
          <input 
            type="number"
            onChange={handlinput}
            value={form.amount}
            name="amount"
            placeholder="enter  number " />
          <input type="test" 
               onChange={handlinput}
               value={form.description}
               name="description"
          placeholder="enter  discription  "/>
          <input type="date"
           onChange={handlinput}
           value={form.date}
           name="date"
          />
          <button type="submit"> submit</button>
       </form>

    </div>
  );
}

export default App;
