import styled from 'styled-components';

export const ContactItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #B554D7;
    color: white;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
`;

export const Input = styled.input`
    padding: 10px;
    margin-bottom: 10px;
    width: 95%;
    border-radius: 5px;
    border: 1px solid #B554D7;
`;

export const Button = styled.button`
    background-color: #ccc;
    color: #000;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
    background-color: #B554D7;
    }
`;

export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    margin: 20px auto;
    background-color: ${(props) => (props.isEditing ? '#F5A623' : '#121D2B')};
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.237);
`;
