import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
    Box,
    Button,
    Field,
    Flex,
    Heading,
    Input,
    NativeSelect,
    Text,
    Textarea,
    VStack,
} from '@chakra-ui/react';

import { useTheme } from './Context/ThemeContext';

// Validation rules
const validationSchema = Yup.object({
    name: Yup.string()
        .required('Name is required'),

    email: Yup.string()
        .email('Enter a valid email address')
        .required('Email is required'),

    enquiryType: Yup.string()
        .oneOf(
            ['general', 'project', 'freelance', 'other'],
            'Please select a valid enquiry type'
        )
        .required('Please select an enquiry type'),

    message: Yup.string()
        .min(10, 'Message must contain at least 10 characters')
        .required('Message is required'),
});

export default function ContactSection() {
    const { darkMode } = useTheme();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            enquiryType: '',
            message: '',
        },

        validationSchema,

        onSubmit: async (values) => {
            console.log('Submitted form:', values);
            alert('Form submitted successfully!✅');

        },
    });

    const inputBackground = darkMode ? '#061B21' : '#FFFFFF';
    const inputColor = darkMode ? '#EAF5F5' : '#031419';
    const borderColor = darkMode ? '#24454C' : '#C7DADA';

    return (
        <Flex
            as="section"
            id="contact"
            aria-labelledby="contact-heading"
            scrollMarginTop={{ base: '119px', md: '75px' }}
            direction="column"
            align="center"
            gap={8}
            w="100%"
            minH="80vh"
            boxSizing="border-box"
            px={{ base: 4, md: 8 }}
            py={{ base: 10, md: 16 }}
            bg={darkMode ? '#031419' : '#EAF5F5'}
            color={darkMode ? '#EAF5F5' : '#031419'}
            transition="background-color 0.3s ease, color 0.3s ease"
        >
            <Heading
                as="h2"
                id="contact-heading"
                w="100%"
                maxW="640px"
                textAlign="left"
                fontSize={{ base: '1.8rem', md: '2.8rem' }}
            >
                Get In Touch
            </Heading>

            <Box
                as="form"
                onSubmit={formik.handleSubmit}
                noValidate
                w="100%"
                maxW="640px"
                p={{ base: 5, md: 8 }}
                border="1px solid"
                borderColor={borderColor}
                borderRadius="xl"
                bg={darkMode ? '#082229' : '#FFFFFF'}
            >
                <VStack align="stretch" gap={5}>
                    {/* Name */}
                    <Field.Root
                        required
                        invalid={Boolean(
                            formik.touched.name && formik.errors.name
                        )}
                    >
                        <Field.Label htmlFor="name">
                            Name
                            <Field.RequiredIndicator />
                        </Field.Label>

                        <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            bg={inputBackground}
                            color={inputColor}
                            borderColor={borderColor}
                            _placeholder={{
                                color: darkMode ? '#91A8AC' : '#718096',
                            }}
                        />

                        {formik.touched.name && formik.errors.name && (
                            <Field.ErrorText>
                                {formik.errors.name}
                            </Field.ErrorText>
                        )}
                    </Field.Root>

                    {/* Email */}
                    <Field.Root
                        required
                        invalid={Boolean(
                            formik.touched.email && formik.errors.email
                        )}
                    >
                        <Field.Label htmlFor="email">
                            Email Address
                            <Field.RequiredIndicator />
                        </Field.Label>

                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            bg={inputBackground}
                            color={inputColor}
                            borderColor={borderColor}
                            _placeholder={{
                                color: darkMode ? '#91A8AC' : '#718096',
                            }}
                        />

                        {formik.touched.email && formik.errors.email && (
                            <Field.ErrorText>
                                {formik.errors.email}
                            </Field.ErrorText>
                        )}
                    </Field.Root>

                    {/* Enquiry type */}
                    <Field.Root
                        required
                        invalid={Boolean(
                            formik.touched.enquiryType &&
                            formik.errors.enquiryType
                        )}
                    >
                        <Field.Label htmlFor="enquiryType">
                            Type of Enquiry
                            <Field.RequiredIndicator />
                        </Field.Label>

                        <NativeSelect.Root w="100%">
                            <NativeSelect.Field
                                id="enquiryType"
                                name="enquiryType"
                                value={formik.values.enquiryType}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                bg={inputBackground}
                                color={inputColor}
                                borderColor={borderColor}
                            >
                                <option value="">
                                    Select an enquiry type
                                </option>
                                <option value="general">
                                    General Question
                                </option>
                                <option value="project">
                                    Project Collaboration
                                </option>
                                <option value="freelance">
                                    Freelance Opportunity
                                </option>
                                <option value="other">
                                    Other
                                </option>
                            </NativeSelect.Field>

                            <NativeSelect.Indicator />
                        </NativeSelect.Root>

                        {formik.touched.enquiryType &&
                            formik.errors.enquiryType && (
                                <Field.ErrorText>
                                    {formik.errors.enquiryType}
                                </Field.ErrorText>
                            )}
                    </Field.Root>

                    {/* Message */}
                    <Field.Root
                        required
                        invalid={Boolean(
                            formik.touched.message && formik.errors.message
                        )}
                    >
                        <Field.Label htmlFor="message">
                            Message
                            <Field.RequiredIndicator />
                        </Field.Label>

                        <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell me about your enquiry..."
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            minH="150px"
                            resize="vertical"
                            bg={inputBackground}
                            color={inputColor}
                            borderColor={borderColor}
                            _placeholder={{
                                color: darkMode ? '#91A8AC' : '#718096',
                            }}
                        />

                        {formik.touched.message && formik.errors.message && (
                            <Field.ErrorText>
                                {formik.errors.message}
                            </Field.ErrorText>
                        )}
                    </Field.Root>

                    {/* Submit */}
                    <Button
                        type="submit"
                        bg="#24D9CC"
                        color="#031419"
                        w="100%"
                        loading={formik.isSubmitting}
                        _hover={{
                            bg: '#19BFAF',
                        }}
                    >
                        Submit
                    </Button>

                    <Text fontSize="sm" opacity={0.7}>
                        All fields are required.
                    </Text>
                </VStack>
            </Box>
        </Flex>
    );
}