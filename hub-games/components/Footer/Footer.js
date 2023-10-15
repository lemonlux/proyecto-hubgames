import "./Footer.css";
const template = () => `
<div class ="footer-container">
    <div class="search-footer">
             <div>
                   <h5>proyecto hub de apps</h5>

             </div>
     </div>
 </div>
 
`;

export const PrintTemplateFooter = () => {
  document.querySelector("footer").innerHTML = template();
};
