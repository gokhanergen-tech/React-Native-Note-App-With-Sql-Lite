import { useEffect } from "react";

const Loading = ({component,asyncFunc,onFinish}) => {
    useEffect(()=>{
        async function start(){
            try{
                await asyncFunc();
                onFinish();
            }catch(error){
                alert(error.message);
            }
        }
        start();
    },[]);
    return (
        component
    );
};

export default Loading;