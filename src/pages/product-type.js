import Header from '../components/header';
import Footer from '../components/footer';
import CardType from '../components/type-card';

export default function ProductType()
{
    const list_pdtype =[
        {
            'name': 'Type 1',
            list_pd:[
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
                }
            ]
        },
        {
            'name': 'Type 2',
            list_pd:[
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
        }
    ];

    const listPDType = list_pdtype.map(function(item)
    {
        return(
            <CardType data={item}/>
        );
    }
    );

    return(
        <>
        <Header/>
        {listPDType}
        <Footer/>
        </>
    );
}