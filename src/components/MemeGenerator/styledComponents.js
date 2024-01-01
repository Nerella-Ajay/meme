// Style your components here
import styled from 'styled-components/macro'

export const AppContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    min-height:100vh;
`

export const MemeGeneratorContainer = styled.div`
    display:flex;
    flex-direction:column;
    width: 100%;
    max-width:550px;
    padding:24px 32px;
    @media screen and (min-width:768px){
        width:85%;
        max-width:1140px;
    }
`

export const Heading = styled.h1`
    color: #35469c;
    font-family: 'Open Sans';
    font-size:24px;
    font-weight: bold;
    text-align: center;
    margin-top: 12px;
    @media screen and (min-width:768px){
        font-size: 36px;
        text-align: left;
    }
`
export const FormAndMemeContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (min-width:768px){
        flex-direction: row-reverse;
    }
`

export const MemeContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    height: 300px;
    padding-left:10px;
    padding-right: 10px;
    margin-bottom:50px;
    @media screen and (min-width:768px){
        width: 45%;
        margin-top: 5px;
        margin-bottom: 25px;
    }
`

export const TextContent = styled.p`
    color: #ffffff;
    font-size: ${props => props.activeFontSizeId}px;
    font-weight: 600;
    font-family: 'Open Sans';
`

export const MemeGeneratorForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (min-width:768px){
        width: 40%
    }
`

export const CustomLabel = styled.label`
    color: #7e858e;
    font-family: 'Open Sans';
    font-weight: 500;
    font-size: 12px;
    line-height:1.6;
    margin-bottom: 0px;
`

export const CustomInput = styled.input`
    color: #5a7184;
    background-color: #ffffff;
    font-family: 'Open Sans';
    border 1px solid #d7dfe9;
    padding:12px 14px;
    border-radius: 5px;
    outline: none;
    margin-top: 5px;
    margin-bottom: 20px;
    height: 40px;
`
export const CustomSelect = styled.select`
    color: #1e293b;
    background-color: #ffffff;
    font-family: 'Open Sans';
    border: 1px solid #d7dfe9;
    height:40px;
    border-radius: 5px;
    padding: 12px 14px;
    margin-top: 10px;
    margin-bottom: 10px;
    outline: none;
`

export const CustomOption = styled.option`
    font-size: 16px;
    padding: 12px 14px;
`

export const GenerateButton = styled.button`
    color: #ffffff;
    background-color: #0b69ff;
    font-family: 'Open Sans';
    font-size: 14px;
    font-weight: 600;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 6px;
    min-width: 25px;
    max-width: 150px;
    padding: 12px 24px;
    margin-top: 15px;
`
