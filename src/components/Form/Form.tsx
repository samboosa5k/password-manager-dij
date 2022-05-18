import { Input, Label, Option, Select } from './Inputs';
import {Flex as FormContainer} from '../Container';

const Form = () => {
  return (
    <FormContainer id={"dummy-form"} flexDirection={"column"}>
      <Label htmlFor="name">Name</Label>
      <Input id="name" type="text" />
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" />
      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" />
      <Label htmlFor="passwordConfirm">Confirm Password</Label>
      <Input id="passwordConfirm" type="password" />
      <Label htmlFor="country">Country</Label>
      <Select id="country">
        <Option value="">Select a country</Option>
        <Option value="US">United States</Option>
        <Option value="GB">United Kingdom</Option>
        <Option value="CA">Canada</Option>
        <Option value="AU">Australia</Option>
        <Option value="NZ">New Zealand</Option>
      </Select>
      <Label htmlFor=""></Label>
    </FormContainer>
  );
};

export { Form };
