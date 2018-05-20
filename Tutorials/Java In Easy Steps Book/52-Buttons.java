import javax.swing.*;
class Buttons extends JFrame
{
	JPanel pnl = new JPanel();
	
	ClassLoader Idr = this.getClass().getClassLoader();
	java.net.URL tickURL = Idr.getResource("Tick.png");
	java.net.URL crossURL = Idr.getResource("Cross.png");
	
	ImageIcon tick = new ImageIcon(tickURL);
	ImageIcon cross = new ImageIcon(crossURL);
	
	JButton btn = new JButton("Click Me");
	JButton tickBtn = new JButton(tick);
	JButton crossBtn = new JButton("STOP", cross);
	public Buttons()
	{
		super("Swing Window");
		setSize(500, 200);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		add(pnl);
		setVisible(true);
		pnl.add(btn);
		pnl.add(tickBtn);
		pnl.add(crossBtn);
	}
	public static void main(String[] args)
	{
		Buttons gui = new Buttons();
	}
}