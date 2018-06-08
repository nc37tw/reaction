import { storiesOf } from "@storybook/react"
import React from "react"
import styled from "styled-components"
import Colors from "Assets/Colors"

import { FormSwitcher } from "../Authentication/Desktop/FormSwitcher"
import { DesktopModal } from "../Authentication/Desktop/Components/DesktopModal"
import { ModalType } from "../Authentication/Types"
import { MobileRegisterForm } from "../../Components/Authentication/Mobile/RegisterForm"
import { Footer } from "../../Components/Authentication/Footer"

const submit = (values, actions) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 1))
    actions.setSubmitting(false)
  }, 1000)
}

const close = () => {
  return
}

storiesOf("Components/Authentication/Desktop", module)
  .add("Login", () => (
    <DesktopModal show onClose={close}>
      <FormSwitcher type={ModalType.login} handleSubmit={submit} />
    </DesktopModal>
  ))
  .add("Forgot Password", () => (
    <DesktopModal show onClose={close}>
      <FormSwitcher type={ModalType.resetPassword} handleSubmit={submit} />
    </DesktopModal>
  ))
  .add("Sign Up", () => (
    <DesktopModal show onClose={close}>
      <FormSwitcher type={ModalType.signup} handleSubmit={submit} />
    </DesktopModal>
  ))

storiesOf("Components/Authentication/Mobile", module).add(
  "RegisterForm",
  () => (
    <MobileContainer>
      <MobileRegisterForm
        values={{}}
        handleSubmit={() => null}
        handleTypeChange={() => mode => null}
      />
    </MobileContainer>
  )
)

storiesOf("Components/Authentication/Common Elements", module)
  .add("Footer - Signup", () => (
    <div>
      <Footer mode="signup" />
      <br />
      <Footer mode="signup" inline />
    </div>
  ))
  .add("Footer - Login", () => (
    <div>
      <Footer mode="login" />
      <br />
      <Footer mode="login" inline />
    </div>
  ))
  .add("Footer - Reset Password", () => <Footer mode="reset_password" />)

const MobileContainer = styled.div`
  border: 1px solid ${Colors.grayRegular};
  display: flex;
  width: 320px;
  height: 460px;
  margin: 0 auto;
  align-self: center;
  justify-content: center;

  form {
    width: 100%;
  }
`
