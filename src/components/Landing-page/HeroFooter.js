import React from 'react'
import "./styles/Footer.css"
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  });
  
export default class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <footer>
                <IconFont type="icon-facebook" className="icon"/>
                <IconFont type="icon-twitter"  className="icon"/>
                <IconFont type="icon-github"  className="icon"/>
                </footer>
            </div>
        )
    }
}