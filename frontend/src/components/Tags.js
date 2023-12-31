import './tags.css'
import { useState, useEffect } from 'react'

function Tags() {
    const [tag, setTag] = useState([])
    const [tagSave, setTagSave] = useState([]);
    useEffect(() => {
        
        localStorage.setItem('tagSave', JSON.stringify(tagSave));
    }, [tagSave]);

    const handleKeydown = async(e) => {
        if (e.key !== 'Enter') return
        const value = e.target.value
        if (!value.trim()) return
        setTag([...tag, value])
        
        setTagSave(tag)
        console.log(tag)
        // Clear the input
        e.target.value = ''
    }
    function removeTag(index) {
        setTag(tag.filter((e, i) => i !== index))
    }
    return (


        <div className="tags-input-container">
            {tag.map((input, index) => (
                <div className="tag-item" key={index}>
                    <span className="text">{input}</span>
                    <span className="close" onClick={() => removeTag(index)}>&times;</span>
                </div>

            ))}
            


            <input onKeyDown={handleKeydown} type="text" className="tags-input" placeholder="Add Tags to Your Blog..." />
  </div>

    );
}

export default Tags

