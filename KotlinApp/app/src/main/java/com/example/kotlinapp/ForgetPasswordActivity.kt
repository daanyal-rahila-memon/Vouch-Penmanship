package com.example.kotlinapp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.text.Editable
import android.text.TextWatcher
import android.util.Patterns.EMAIL_ADDRESS
import android.view.View
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import androidx.core.util.PatternsCompat.EMAIL_ADDRESS
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.FirebaseUser
import java.util.regex.Pattern

class ForgetPasswordActivity : AppCompatActivity(), View.OnClickListener {

    private lateinit var resetPasswordbtn: Button
    private lateinit var emailEditText: EditText
    private lateinit var auth: FirebaseAuth

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_forget_password)

       resetPasswordbtn = findViewById(R.id.reset_password_btn);
        emailEditText = findViewById(R.id.reset_email_edit_txt)

        resetPasswordbtn.addTextChangedListener(textWatcher)

        auth = FirebaseAuth.getInstance()

        resetPasswordbtn.setOnClickListener(this)
    }


    private val textWatcher = object : TextWatcher
    {
        override fun beforeTextChanged(p0: CharSequence?, p1: Int, p2: Int, p3: Int) {
        }

        override fun onTextChanged(p0: CharSequence?, p1: Int, p2: Int, p3: Int) {

            resetPasswordbtn.isEnabled = emailEditText.text.toString().trim().isNotEmpty()
        }

        override fun afterTextChanged(p0: Editable?) {

        }

    }

    override fun onClick(view: View?) {
//        val emailPattern = "/([a-zA-Z0-9]+)([\\_\\.\\-{1}])?([a-zA-Z0-9]+)" +
//                "\\@([a-zA-Z0-9]+)([\\.])([a-zA-Z\\.]+)/g"
        val emailPattern = "/([a-zA-Z0-9]+)([\\.{1}])?([a-zA-Z0-9]+)\\@gmail([\\.])com/g"

        val email = emailEditText.text.toString().trim()

        if (email.isEmpty())
        {
            emailEditText.setError("Enter Email First")
            emailEditText.requestFocus()
            return
        }
//        if(Pattern.EMAIL_ADDRESS)
//        {
//            emailEditText.setError("Enter Valid Email")
//            emailEditText.requestFocus()
//            return
//        }


        auth.sendPasswordResetEmail(email).addOnCompleteListener(this){ task ->

            if (task.isSuccessful)
            {
                Toast.makeText(this,"Check Your Email", Toast.LENGTH_LONG)
                    .show()

            }
            else
            {
                Toast.makeText(this,"Failed to Send Email", Toast.LENGTH_LONG)
                    .show()
            }
        }
    }
}

