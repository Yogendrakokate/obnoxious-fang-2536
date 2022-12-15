import React from 'react';
import "./AddProjectFrom.css";


const AddProjectForm = () => {
  return (
    <div className="container">
    <form action="/action_page.php">
      <div className="row">
       
          <label htmlFor="project_nam">Project Name</label>
       
       
          <input type="text" id="project_nam" name="project_name" placeholder="Project Name" /><br/>
        </div>

      <div className="row">
       
          <label htmlFor="HourRate">Project hour rate</label>
       
       
          <input type="text" id="HourRate" name="HourRate" placeholder="In INR" />
        </div>
        <div className="row">
       
          <label htmlFor="Estcost">Estimate costs</label>
       
       
          <input type="text" id="Estcost" name="Estcost" placeholder="In INR" />
        </div>
        <div className="row">
       
       <label htmlFor="EstTime">Estimate time</label>
    
    
       <input type="text" id="EstTime" name="EstTIme" placeholder="In Hour" />
     </div>

    
     
    </form>
  </div>
  )
}

export default AddProjectForm