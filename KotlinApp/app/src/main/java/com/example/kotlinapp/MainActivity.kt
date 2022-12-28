package com.example.kotlinapp

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.text.Editable
import android.text.TextWatcher
import android.view.View
import android.widget.*
import com.google.android.gms.auth.api.signin.GoogleSignIn
import com.google.android.gms.auth.api.signin.GoogleSignInClient
import com.google.android.gms.auth.api.signin.GoogleSignInOptions
import com.google.android.gms.common.api.ApiException
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.GoogleAuthCredential
import com.google.firebase.auth.GoogleAuthProvider
import com.google.firebase.ktx.Firebase


private lateinit var googleSignInClient: GoogleSignInClient

private lateinit var auth:FirebaseAuth

private const val RC_SIGN_IN = 9001

private lateinit var emailEditText:EditText
private lateinit var passwordEditText: EditText

class MainActivity : AppCompatActivity(), View.OnClickListener {


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val googleSignBtn = findViewById<ImageView>(R.id.google_sign_in_btn)
        val signInBtn = findViewById<Button>(R.id.sign_in_btn)
        val forgetPassword = findViewById<TextView>(R.id.forget_password_txt_view)

        emailEditText = findViewById(R.id.email_edittxt)
        passwordEditText = findViewById(R.id.password_edittxt)


        val gso = GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
            .requestIdToken(getString(R.string.default_web_client_id)).requestEmail().build()

        googleSignInClient = GoogleSignIn.getClient(this, gso);
        auth = FirebaseAuth.getInstance()

        emailEditText.addTextChangedListener(textWatcher)
        passwordEditText.addTextChangedListener(textWatcher)

        forgetPassword.setOnClickListener(this)
        googleSignBtn.setOnClickListener(this)
        signInBtn.setOnClickListener(this)


    }

    private val textWatcher = object : TextWatcher
    {
        override fun beforeTextChanged(p0: CharSequence?, p1: Int, p2: Int, p3: Int) {

        }

        override fun onTextChanged(p0: CharSequence?, start: Int, end: Int, count: Int) {

            findViewById<Button>(R.id.sign_in_btn).isEnabled =
                (emailEditText.text.toString().trim().isNotEmpty()
                        && passwordEditText.text.toString().trim().isNotEmpty())
        }

        override fun afterTextChanged(p0: Editable?) {
        }

    }

    override fun onClick(view: View?) {

        when (view?.getId())
        {
            R.id.google_sign_in_btn ->
            {
                googleSignIn()
            }
            R.id.sign_in_btn -> {
                signIn(emailEditText.text.toString().trim(), passwordEditText.text.toString().trim())
            }
            R.id.forget_password_txt_view -> {
                startActivity(Intent(this, ForgetPasswordActivity::class.java))

            }
        }
    }

    private fun signIn(email: String, password: String) {

        if(email.isEmpty())
        {
            emailEditText.setError("Please Enter Email")
            emailEditText.requestFocus()
            return
        }

        if(password.isEmpty())
        {
            passwordEditText.setError("Please Enter Email")
            passwordEditText.requestFocus()
            return
        }

        auth.createUserWithEmailAndPassword(email, password).addOnCompleteListener(this){task ->
            if(task.isSuccessful)
            {
                val user = auth.currentUser
            }
            else
            {
                Toast.makeText(this,"UserCreation Failed", Toast.LENGTH_LONG)
                    .show()
            }
        }
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)

        if (requestCode == RC_SIGN_IN)
        {
            val task = GoogleSignIn.getSignedInAccountFromIntent(data)
            try {
                val account = task.getResult(ApiException::class.java)!!
                Toast.makeText(this,"Google SignIn was Succssfull", Toast.LENGTH_LONG)
                    .show()
                firebaseAuthWithGoogle(account.idToken!!)
            } catch (e: ApiException)
            {
                Toast.makeText(this, "Google SignIn Failed", Toast.LENGTH_LONG).show()
            }
        }
    }

    private fun firebaseAuthWithGoogle(idToken: String) {
        val credential = GoogleAuthProvider.getCredential(idToken, null)
        auth.signInWithCredential(credential)
            .addOnCompleteListener(this){ task ->
                if (task.isSuccessful)
                {
                    val user = auth.currentUser
                }
                else
                {
                    Toast.makeText(this, "signIn with Credential Failed", Toast.LENGTH_LONG)
                        .show()
                }
            }

    }

    private fun googleSignIn() {
       val signInIntent = googleSignInClient.signInIntent
        startActivityForResult(signInIntent, RC_SIGN_IN)
    }

}