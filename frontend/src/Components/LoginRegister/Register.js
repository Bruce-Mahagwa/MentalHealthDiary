// dependencies
import { Button, Label, TextInput, Modal } from "flowbite-react";
// files
import "./Form.css"
const Register = ({openModalRegister, setOpenModalRegister}) => {
    return (
        <Modal show={openModalRegister} onClose={() => setOpenModalRegister(false)} dismissible>
            <Modal.Header>Register</Modal.Header>
            <Modal.Body>
                <form className="flex max-w-md flex-col gap-4 mx-auto mt-8">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email" value="Your email" />
                        </div>
                        <TextInput id="email" type="email" placeholder="name@flowbite.com" required shadow 
                        helperText={
                            <>
                            Does not have to be a real email.
                            </>
                        }
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="username" value="Your userName" />
                        </div>
                        <TextInput id="username" type="text" required shadow />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password" value="Your password" />
                        </div>
                        <TextInput id="password" type="password" required shadow />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="repeat-password" value="Repeat password" />
                        </div>
                        <TextInput id="repeat-password" type="password" required shadow />
                    </div>
                    <Button type="submit" className = "text-black">Register new account</Button>
                </form>
            </Modal.Body>
        </Modal>
    )
}
export default Register;