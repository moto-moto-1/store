

export const constant_new_task_fields = [

    {fieldname:'Task name:' , inputfielddata:'' ,inputfieldtype:'input'},
    {fieldname:'Description:' , inputfieldtype:'textarea'},
    {fieldname:'Evaluation:' , inputfielddata:'Range from 0-100' ,inputfieldtype:'inputnumber'},
    {fieldname:'Revenue:' , inputfielddata:'$' ,inputfieldtype:'inputnumber'},
    {fieldname:'Start date:' , inputfielddata:'dd/mm/yy' ,inputfieldtype:'inputdate'},
    {fieldname:'End date:' , inputfielddata:'dd/mm/yy' ,inputfieldtype:'inputdate'},
    {fieldname:'Duration:' , inputfielddata:'days' ,inputfieldtype:'inputnumber'},
    {fieldname:'Status:' , inputfielddata:'Planned|Held|Active|Finished|Delete' ,inputfieldtype:'buttons'}

];



export const constant_new_supply_fields = [

    {fieldname:'Name:' , inputfielddata:'' ,inputfieldtype:'input'},
    {fieldname:'Code:' , inputfieldtype:'input'},
    {fieldname:'Unit by:' , inputfielddata:'Piece or m or Kg' ,inputfieldtype:'input'},
    {fieldname:'Quantity:' , inputfielddata:'' ,inputfieldtype:'inputnumber'},
    {fieldname:'Price:' , inputfielddata:'$' ,inputfieldtype:'inputnumber'},
    
];

export const constant_new_office_fields = [
    {fieldname:'Office name:' , inputfielddata:'' ,inputfieldtype:'input'},
    {fieldname:'Description:' , inputfieldtype:'textarea'}
];

export const inputlinestyle = {
     fontsize:'20px',
     minwidth:'5cm',
}
