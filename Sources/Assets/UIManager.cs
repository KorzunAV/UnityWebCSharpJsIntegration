using System;
using UnityEngine;
using System.Runtime.InteropServices;
using UnityEngine.UI;

public class UIManager : MonoBehaviour
{
    [DllImport("__Internal")]
    private static extern string GetMessage();


    public Text textField;
    public InputField inputField;


    // Start is called before the first frame update
    void Start()
    {
        textField.text = "Hello world";
    }

    // Update is called once per frame
    void Update()
    {

    }

    public void UpdateFromJs(string value)
    {
        if (textField == null)
            return;

        try
        {
            textField.text = string.IsNullOrWhiteSpace(value) ? "string empty" : value;
        }
        catch (Exception ex)
        {
            textField.text = ex.Message;
        }
    }

    public void ButtonClick()
    {
        if (inputField == null)
            return;

        try
        {
            var msg = inputField.text;
            if (string.IsNullOrWhiteSpace(msg))
                msg = "Empty";

            Application.ExternalCall("updateFromUnity", msg);
        }
        catch (Exception ex)
        {
            textField.text = ex.Message;
        }
    }
}
