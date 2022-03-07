import { shallow } from "enzyme"
import { GifGridItem } from "../components/GifGridItem"
import '@testing-library/jest-dom';


describe('GifGridItem', () => { 
    
    
    const title = 'titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('should display de item', () => { 


        expect(wrapper).toMatchSnapshot();

     })


     test('should have <p></p> with the title', () => { 
        
        const  p = wrapper.find('p');
        expect( p.text().trim()).toBe(title);

      })

      test('should have an image equal to url and alt from pros', () => { 
          
        const img = wrapper.find('img');

        
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);


       })

       test('should have animate_fadein', () => { 

        const div = wrapper.find('div');

        expect(div.prop('className')).toContain('animate__fadeIn');

        })

 })