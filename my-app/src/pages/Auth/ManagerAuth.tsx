import React from 'react'
import { Link } from 'react-router-dom'
import { FormValues } from '../../types/user'
type UserProps = {
    data: FormValues[],
    onRemove : (id: number) => void
}

const ManagerAuth = (props: UserProps) => {
  return (
    <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>

      <table className='min-w-full divide-y divide-gray-200'>
        <thead className='bg-gray-50'>
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STT</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Accout</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.data && props.data.map((item, index) => {
            // console.log(item);
            

            return <tr key={index} className="">
              <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>

              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex-shrink-0 h-10 w-10">
                  {item.name}
                </div>

              </td>



              <td>

                <div className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button onClick={() => props.onRemove(item._id)} className="btn bg-red-500 text-white inline-block py-3 px-5 rounded">Remove</button>


                </div>

              </td>
            </tr>


          })}

        </tbody>
      </table>
    </div>
  )
}

export default ManagerAuth