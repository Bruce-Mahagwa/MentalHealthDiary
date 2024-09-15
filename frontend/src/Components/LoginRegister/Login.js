// dependencies
import { Button, Label, TextInput, Modal } from "flowbite-react";

const Login = ({openModalLogin, setOpenModalLogin}) => {
    return (
        <Modal show={openModalLogin} onClose={() => setOpenModalLogin(false)} dismissible>
            <Modal.Header>Login</Modal.Header>
            <Modal.Body>
                <form className="flex max-w-md flex-col gap-4 mx-auto mt-8">                
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
                    <Button type="submit" className = "text-black">Login</Button>
                </form>
            </Modal.Body>
        </Modal>
    )
}
export default Login;