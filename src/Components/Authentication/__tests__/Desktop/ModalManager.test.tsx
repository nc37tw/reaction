import { mount, ReactWrapper } from "enzyme"
import React from "react"
import { LoginForm } from "../../Desktop/LoginForm"
import { ModalManager, ModalManagerProps } from "../../Desktop/ModalManager"

const getWrapper = (
  props?: ModalManagerProps
): ReactWrapper<ModalManagerProps> => {
  const wrapper = mount(
    <ModalManager
      submitUrls={{
        login: "/login",
        signup: "/signup",
        forgot: "/forgot",
      }}
      csrf="CSRF_TOKEN"
      {...props}
    />
  )

  return wrapper
}

describe("ModalManager", () => {
  it("renders the right form when a type is passed in", () => {
    const wrapper = getWrapper()

    expect(wrapper.find(LoginForm).exists).toBeTruthy()
  })

  it("sets the currentType if openModal is called", () => {
    const wrapper = getWrapper()
    let manager = wrapper.instance() as ModalManager

    manager.openModal({
      mode: "login",
    })

    expect(manager.state.currentType).toEqual("login")
  })

  it("sets the currentType to null if closeModal is called", () => {
    const wrapper = getWrapper()
    let manager = wrapper.instance() as ModalManager

    manager.closeModal()

    expect(manager.state.currentType).toEqual(null)
  })

  it("prevents scrolling when opened", () => {
    const wrapper = getWrapper()
    let manager = wrapper.instance() as ModalManager

    expect(document.body.style.overflowY).toEqual("auto")

    manager.openModal({
      mode: "login",
    })

    expect(document.body.style.overflowY).toEqual("hidden")
  })

  it("handles type changes", () => {
    const wrapper = getWrapper()
    let manager = wrapper.instance() as ModalManager

    manager.openModal({
      mode: "login",
    })

    manager.handleTypeChange("signup")

    expect(manager.state.currentType).toEqual("signup")
    expect(manager.state.switchedForms).toEqual(true)
    expect(manager.state.options.mode).toEqual("signup")
  })

  it("returns the right subtitle", () => {
    const wrapper = getWrapper()
    let manager = wrapper.instance() as ModalManager

    manager.openModal({
      mode: "login",
      copy: "Foobar",
    })
    expect(manager.getSubtitle()).toEqual("Foobar")

    manager.handleTypeChange("signup")
    expect(manager.getSubtitle()).toEqual("Sign up")

    manager.handleTypeChange("forgot")
    expect(manager.getSubtitle()).toEqual("Forgot Password")
  })
})
