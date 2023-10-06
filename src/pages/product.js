import Header from '../components/header';
import Footer from '../components/footer';
import Card from '../components/card';
import Information from '../components/information';


export default function Product()
{
   const list_pd=[
    {
        'pic':'o2.png',
        'name':'One Piece',
        'price': 5000
    },
    {
        'pic':'o3.png',
        'name':'One Piece2',
        'price': 35000
    },
    {

        'pic':'o9.png',
        'name':'One Piece3',
        'price': 15000
    },
    {
        'pic':'o7.png',
        'name':'One Piece4',
        'price': 7000
    },
    {
       'pic':'o2.png',
       'name':'One Piece5',
       'price': 9000
    },
    {
          'pic':'o3.png',
          'name':'One Piece6',
          'price': 23000
    },
    {
          'pic':'o9.png',
          'name':'One Piece7',
          'price': 25000
    },
    {
          'pic':'o7.png',
          'name':'One Piece8',
          'price': 1000
    }
  ]
  
  
   const PDlist = list_pd.map(function(item)
   {
       return(
           <Card data={item}/>
       );
   })

   return(
    <>
    <Header/>
   <Information/>
   <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3"> {PDlist}</div>
    <Footer/>
    </>
   );
}