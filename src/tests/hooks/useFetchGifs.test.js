import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Test in useFetchGifs', () => { 
    

    test('should return init status', async() => { 
        


        const { result, waitForNextUpdate } = renderHook( () => {
            return useFetchGifs('category');
        });
        
        const {data , loading} = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
     })


     test('should return an array of images and loading have be false', async () => { 
         
        const { result, waitForNextUpdate } = renderHook( () => {
            return useFetchGifs('category');
        });
        await waitForNextUpdate();

        const {data , loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);

     });


 })