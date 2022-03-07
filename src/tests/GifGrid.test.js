import { shallow } from "enzyme"
import { GifGrid } from "../components/GifGrid"
import { useFetchGifs } from "../hooks/useFetchGifs";

jest.mock("../hooks/useFetchGifs"); //Fingimos la llamada a esta funcion

describe('<GifGrid /> tests', () => { 
    
    const category = "test";
    
    test('should display the item', () => { 
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category}/>)
        expect(wrapper).toMatchSnapshot();

     });

     test('should have the info after loading useFetch()', () => { 
         
        const gifs =[{
            id:'ABC',
            url: 'https://algo.com/img.jpg',
            title:'cualquier cosa'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category}/>)

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists() ).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

      });



 })