import javax.swing.*;
import java.awt.event.*;
class MouseEvents extends JFrame implements MouseListener, MouseMotionListener
{
	JPanel pnl = new JPanel();
	int x, y;

	JTextArea txtArea = new JTextArea(8, 38);
	public MouseEvents()
	{
		super("Swing Window");
		setSize(500, 200);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		add(pnl);
		setVisible(true);
		pnl.add(txtArea);
		txtArea.addMouseMotionListener(this);
		txtArea.addMouseListener(this);
	}
	public static void main(String[] args)
	{
		MouseEvents gui = new MouseEvents();
	}
	public void mouseMoved(MouseEvent event)
	{x = event.getX(); y = event.getY();}

	public void mouseDragged(MouseEvent event) {}

	public void mouseEntered(MouseEvent event)
	{txtArea.setText("Mouse Entered");}

	public void mousePressed(MouseEvent event)
	{txtArea.append("\nMouse Pressed at X: " + x + "Y: " + y);}

	public void mouseReleased(MouseEvent event)
	{txtArea.append("\nMouse Released");}

	public void mouseClicked(MouseEvent event) {}

	public void mouseExited(MouseEvent event) {}
}
