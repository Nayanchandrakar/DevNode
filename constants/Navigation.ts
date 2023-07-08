export interface NavigationElemProps{
    label:string,
    redirect:string,
    id:number,
}

export const NavigationMenu : NavigationElemProps[] = [
    {id: 63864 ,label:'My Feed' , redirect:'/'},
    {id: 63864 ,label:'Explore' , redirect:'/explore'},
    {id: 63864 ,label:'Bookmarks' , redirect:'/sign-up'},
    {id: 63864 ,label:'Favourites' , redirect:'/sign-in'},
]