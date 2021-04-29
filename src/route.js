const express = require('express');
const routes = express.Router();

//Routes-------------------
routes.get('/', (req, res) =>{
   req.getConnection((err, conn)=>{
       if(err ) return res.send(err)

       conn.query('Select * from productos', (err, rows,)=>{
         if(!err ) {
          res.json(rows);
         }else{
           res.send(err)
         }

       
       })
   })
})

routes.get('/:id', (req, res) =>{
  req.getConnection((err, conn)=>{
      if(err ) return res.send(err)

      conn.query('Select * from productos where id=?',[req.params.id], (err, rows,)=>{
        if(!err ) {
         res.json(rows[0]);
        }else{
          res.send(err)
        }

      
      })
  })
})

routes.post('/', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err ) return res.send(err)
 
        conn.query('Insert into productos set ?', [req.body], (err, rows)=>{
          if(err ) return res.send(err)
 
          res.send('Producto Registrado');
        })
    })
 })
*
 
/*routes.post('/', (req, res) =>{
  req.getConnection((err, conn)=>{
    
      if(!err )
      {
        conn.query('Call AddOrEditProducto (?, ?, ?, ?)', [req.body], (err, rows)=>{
          if(err ) return res.send(err)
  
          res.send('Producto Registrado');
        })
      }else 
      {
        res.send(err)
      }

     
  })
})*/

 routes.delete('/:id', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err ) return res.send(err)
 
        conn.query('Delete from productos where id=?', [req.params.id], (err, rows)=>{
          if(err ) return res.send(err)
 
          res.send('Producto Borrado');
        })
    })
 })

 routes.put('/:id', (req, res) =>{
    req.getConnection((err, conn)=>{
        if(err ) return res.send(err)
 
        conn.query('Update  productos set? where id=?', [req.body, req.params.id], (err, rows)=>{
          if(err ) return res.send(err)
 
          res.send('Producto Actualizado');
        })
    })
 })


module.exports = routes;