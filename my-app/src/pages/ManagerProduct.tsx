import React from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from '../types/product'

type ManagerProductProps = {
  data: ProductType[],
  onRemove: (id: number) => void
  
  
}

const ManagerProduct = (props: ManagerProductProps) => {
  return (
    <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead className='bg-gray-50'>
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STT</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.data && props.data.map((item, index) => {
            console.log(item);
            
            return <tr key={index} className="">
              <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>

              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex-shrink-0 h-10 w-10">
                  {item.name}
                </div>
                             
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                
                <div className="flex-shrink-0 h-10 w-10">
                  {item.price}
                </div>
                </td>
              {/* <td>
                <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <img className="h-10 w-10 rounded-full" src="{item.img}" alt="" />
                </div>
              </div>
              </td> */}
              

              <td>
                <div className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="btn-e bg-blue-500 text-white inline-block py-3 px-5 rounded w-20">
                    <Link to={`/admin/product/${item.id}/edit`}>Edit</Link>
                  </div>
                  
                </div>
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

export default ManagerProduct