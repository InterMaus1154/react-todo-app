import {useState, useRef, useEffect} from 'react';

import AddCategoryModal from './sidepanel/AddCategoryModal';
import AddItemBox from './sidepanel/AddItemBox';
import FilterItemBox from './sidepanel/FilterItemBox';
import SummaryBox from './sidepanel/SummaryBox';
import Footer from './sidepanel/Footer';

const Sidepanel = ({categories, setCategories, importanceGrades}) =>{

    const centerButtonStyle = {
        justifySelf: "center",
        alignSelf: "center"
    };
    
    const [modalVisible, setModalVisible] = useState(false);
    
    let ref = useRef(null);

    useEffect(()=>{

        const handler = event =>{
            if(modalVisible && ref.current && !ref.current.contains(event.target)){
                setModalVisible(false);
            }
        };

        document.addEventListener("mousedown", handler);

        return () =>{
            document.removeEventListener("mousedown", handler);
        };

    }, [modalVisible]);

    return (
        <section className="Sidepanel--component">
            <h1 id="Sidepanel-header">Todo React</h1>
            
            <div id="Sidepanel-input-boxes">
                <AddItemBox categories={categories} setModalVisible={setModalVisible} centerButtonStyle={centerButtonStyle}/>
                <FilterItemBox categories={categories} importanceGrades={importanceGrades} centerButtonStyle={centerButtonStyle}/>
                <SummaryBox />
            </div>
            
            <Footer />

            <AddCategoryModal reference={ref} categories={categories} setCategories={setCategories} visible={modalVisible} setVisible={setModalVisible}/>

        </section>
    );
};

export default Sidepanel;
