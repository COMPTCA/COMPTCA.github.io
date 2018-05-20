import javax.swing.*;
import java.awt.event.*;
public class Lotto extends JFrame implements ActionListener
{
    ClassLoader Idr = this.getClass().getClassLoader();
    java.net.URL iconURL = Idr.getResource("Lotto.png");
    ImageIcon icon = new ImageIcon(iconURL);
    JLabel img = new JLabel(icon);
    JTextField txt = new JTextField("", 18);
    JButton btn = new JButton("Get My Lucky Numbers");
    JPanel pnl = new JPanel();

    public Lotto()
    {
        super("Lotto App");
        setSize(260, 210);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        add(pnl);
        setVisible(true);
        pnl.add(img);
        pnl.add(txt);
        pnl.add(btn);
        btn.addActionListener(this);
    }
    public void actionPerformed(ActionEvent event)
    {
        if (event.getSource() == btn)
        {
            int[] nums = new int[60];
            String str = "";
            for (int i = 1; i < 60; i++) {nums[i] = i;}
            for (int i = 1; i < 60; i++)
            {
                int r = (int)(59 * Math.random()) + 1;
                int t = nums[i];
                nums[i] = nums[r];
                nums[r] = t;
            }
            for (int i = 1; i < 7; i++)
            {
                str += " " + Integer.toString(nums[i]) + " ";
            }
            txt.setText(str);
        }
    }
    public static void main(String[] args)
    {
        Lotto lotto = new Lotto();
    }
}
