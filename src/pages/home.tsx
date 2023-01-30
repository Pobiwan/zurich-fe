import "./home.css";
import {useState, useEffect, useCallback} from 'react';
import { getRequest } from '../services/axios';
import { User } from '../modals/user';
import UserList from '../components/userlist';
import Spinner from '../components/loadingSpinner';

interface UserApiResponse {
    data: User[],
    total_pages: number,
    per_page: number,
    total: number,
    page: number,
    support: {
        url: string,
        text: string
    }
}

const getReleventResult = (allResults: [User][], perPage: number): User[] =>{
    let finalResults = [];
    for(let j=0; j<allResults.length; j++){
        for(let k=0; k<perPage;k++){
            if(allResults[j][k]['first_name'].indexOf('G') === 0){
                finalResults.push(allResults[j][k]);
                continue;
            }
            if(allResults[j][k]['last_name'].indexOf('W') === 0){
                finalResults.push(allResults[j][k])
            }
        }
    }
    return finalResults
}

const userApi = "https://reqres.in/api/users";
const pageAddon = '?page='

export function Home(props:any){

    const [isLoading, setIsLoading]  = useState(false);
    const [users, setUsers] = useState<User[]>([]);

    const getAllResults = useCallback(async (noofPages:number, perPage: number)=>{
        let promises = [];
        for(let i=1; i<=noofPages; i++){
            promises.push(getResult(userApi+pageAddon+i));
        }
        let allResults = await Promise.all(promises)
        let allRelevantResults =  getReleventResult(allResults, perPage);
        //console.log('relevant results ', allRelevantResults)
        setUsers(allRelevantResults);
    },[])

    const getResult = useCallback(async (url:string): Promise<[User]>=>{
        let results = await getRequest(url);
        //console.log(results.data.data)
        return results.data?.data;
    },[])

    const getTotalPages = useCallback(async (url:string) =>{
        let results = await getRequest(url);
        let data = results.data as UserApiResponse;
        getAllResults(data.total_pages, data.per_page);
    },[])

    useEffect(()=>{
        try{
            setIsLoading(true);
            getTotalPages(userApi);
            setIsLoading(false);
        }catch(err){
            setIsLoading(false);
            console.log('err caught while fetching users ', err);
        }
    }, [])

    const renderUsers=(
        <>        
        <h1 className={'home-header'}> Users </h1>
        <div className={"userlist-container"}>
          
            {users.map((user, index) => (
                <UserList user={user} key={index} />
            ))}
        </div>
        </>
    )

    return(
        <div className={"home-container"}>
            {isLoading ? <Spinner /> : renderUsers}
        </div>
    )
}