import { useMutation } from "@tanstack/react-query";


export const PostReq = (data,postFunction) => {

    const { mutate, isLoading,data:dataContent,isError } = useMutation({
        mutationFn: createLocation,
    
        onError: (err) => {
         console.log(err)
      
        
        },
        onSuccess:(data) =>{
            // setinfo('category created')
    
            // if(!data.response.data.status){
            //     setTimeout(() => {
            //         setinfo('unable to create category')
            //     }, 1000);
            //     setinfo('')
            // }
            // setTimeout(() => {
            //     setShowModal(false)
            //     setinfo('')
            // }, 2000);
            refetch()
            return {
              dataContent
            }
        }
      });
      mutate(data)

}
