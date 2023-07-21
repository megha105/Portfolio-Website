var typed=new Typed(".typing",{
	strings:["","Front End Developer","Web Designer"],
	typeSpeed:60,
	BackSpeed:20,
	loop:true
})

const tabs=document.querySelectorAll('.tab_btn');
const all_content=document.querySelectorAll('.content');
tabs.forEach((tab,index)=>{
	tab.addEventListener('click',()=>{
		const faElements = document.querySelectorAll('.fa');
		faElements.forEach((faElement) => {
			faElement.style.lineHeight = 'unset';
		});
		tabs.forEach(tab=>{tab.classList.remove('active')})
		tab.classList.add('active');

	all_content.forEach(content=>{
		content.classList.remove('active')})
	all_content[index].classList.add('active');
	})
})
