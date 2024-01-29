import React from 'react';
import styles from './Login.module.scss';
import image from 'assets/images/LoginImage.jpg';
import { Paragraph } from 'components/Paragraph/Paragraph';
import { InputText } from 'components/InputText/InputText';
import { Button } from 'components/Button/Button';
import { useForm } from 'react-hook-form';
import { INVALID_USERNAME_PASSWORD } from './constants';
import { EMAIL_REGEX } from 'constants/constants';

const Login = () => {
  const {
    register,
    formState: { errors, isDirty, isValid },
    handleSubmit
  } = useForm({
    mode: 'onChange'
  });

  const onSubmit = () => {};

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginSubWrapper}>
        <div className={styles.imageWrapper}>
          <img src={image} alt="Construction Image" />
        </div>
        <div className={styles.formWrapper}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h2>Login</h2>
            <div className={styles.field}>
              <Paragraph type="FieldLabel">
                Email<span className={styles.required}> *</span>
              </Paragraph>
              <InputText
                type="text"
                placeholder="Enter email ID"
                {...register('email', {
                  required: true,
                  pattern: EMAIL_REGEX
                })}
                fullWidth
                //   className={error && styles.errorStyle}
              />
              <Paragraph
                type="Error"
                className={!errors.email && styles.errorVisibility}
              >
                {errors.email ? 'Email is required.' : <>&nbsp;</>}
              </Paragraph>
            </div>
            <div className={styles.field} style={{ marginTop: '0.8rem' }}>
              <Paragraph type="FieldLabel">
                Password<span className={styles.required}> *</span>
              </Paragraph>
              <InputText
                type="password"
                placeholder="Enter password"
                {...register('password', { required: true })}
                fullWidth
                //   className={error && styles.errorStyle}
              />
              <div className={styles.belowPassword}>
                {/* {error && (
                <Paragraph type="Error">
                  {error && INVALID_USERNAME_PASSWORD}
                </Paragraph>
              )} */}
                {/* <div
                className={styles.forgotPasswordText}
                onClick={handleForgotPassword}
              >
                Forgot password?
              </div> */}
              </div>
            </div>

            <div className={styles.buttonWrapper}>
              <Button
                className={styles.innerButton}
                type="submit"
                fullWidth
                //   loading={loading}
                disabled={!isDirty || !isValid}
              >
                Log In
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
