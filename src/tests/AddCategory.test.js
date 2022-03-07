import { shallow } from "enzyme"
import { AddCategory } from "../components/AddCategory"


describe('<AddCategory/> test', () => { 

    const setCategories = jest.fn(); // Function jest for evaluate, nothing inside
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>); // for helpers

    beforeEach( () => {
      jest.clearAllMocks();
      wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });


    test('should render correctly', () => { 
        
        expect(wrapper).toMatchSnapshot();

     })

     test('should change the inputtext', () => { 
        
        const input = wrapper.find('input');
        const value = 'hola mundo';
        input.simulate('change',{target:{value}}); //enviamos el target del evento e para que no pete

        expect(wrapper.find('p').text().trim()).toBe(value);

      })    

      test('should not post info with submit', () => { 
        
        wrapper.find('form').simulate('submit', { preventDefault(){}}); // hemos acoutado esto: preventDefault () => {} 

        expect( setCategories ).not.toHaveBeenCalled();

       })


       test('should call setCategories and clean the inputText', () => { 
         
        const value = 'adios mundo';

        //1. Simular el inputChange
        wrapper.find('input').simulate('change',{target:{value}});
        
        //2. simular submit
        wrapper.find('form').simulate('submit', { preventDefault(){}});
        
        //3. setCategories llamado
        expect( setCategories ).toHaveBeenCalledWith(expect.any(Function));

        //4. value input debe estar vacío ''
        expect(wrapper.find('input').prop('value')).toBe('');

        })

 })