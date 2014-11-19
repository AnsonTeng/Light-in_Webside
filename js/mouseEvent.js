//icons
//註冊事件
protected void Page_Load(object sender, EventArgs e)
	{
    //滑鼠移上去更換新的圖片 
    btnStartExam.Attributes.Add("onmouseover", "this.src='images/Logo_Light-In.png'"); 
    //滑鼠移開回復原來圖片
    btnStartExam.Attributes.Add("onmouseout", "this.src='images/contact_Icon.jpg'");
}