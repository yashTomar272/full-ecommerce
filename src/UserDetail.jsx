
import {useFirebase} from './Firebase';

export default function UserDetail(){

  const firebase=useFirebase();
  const {getAllUser} =firebase;
 
  return(
    <><div className="p-5 d-flex table_main flex-column gap-3" style={{overflowX:"scroll",scrollbarWidth:'none',cursor:"pointer"}}>
      <div className="d-flex justify-content-between align-item-center">
      <h4>All User</h4>
        
      </div>
    <table className="w-100" style={{border:"1px solid #ffd6d6"}}>
    <tr>
    <th className="p-sm-2  p-1" style={{border:"1px solid #ffd6d6"}}>S.No.</th>
    <th className="p-sm-2  p-1" style={{border:"1px solid #ffd6d6"}}> Name</th>
    <th className="p-sm-2  p-1" style={{border:"1px solid #ffd6d6"}}>Email</th>
    <th className="p-sm-2  p-1" style={{border:"1px solid #ffd6d6"}}>Uid</th>
    <th className="p-sm-2  p-1" style={{border:"1px solid #ffd6d6"}}>Role</th>
    <th className="p-sm-2  p-1" style={{border:"1px solid #ffd6d6"}}>Date</th>
    </tr>
      {
        getAllUser.map((val,id)=>{
          return(
            <tr key={val.id}>
              <td className="p-sm-2  p-1" style={{border:"1px solid #ffd6d6"}}>{id+1}</td>
              <td className="p-sm-2  p-1" style={{border:"1px solid #ffd6d6"}}>{val.username}</td>
              <td className="p-sm-2  p-1" style={{border:"1px solid #ffd6d6"}}>{val.email}</td>
              <td className="p-sm-2  p-1" style={{border:"1px solid #ffd6d6"}}>{val.userId}</td>

              <td className="p-sm-2  p-1" style={{border:"1px solid #ffd6d6"}} >{val.role}</td>
              <td className="p-sm-2  p-1" style={{border:"1px solid #ffd6d6"}}>{val.date}</td>
              </tr>
          )
        })
      }
    </table>
      </div>
    </>
  )
}