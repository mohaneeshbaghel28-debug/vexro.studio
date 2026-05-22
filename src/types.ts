/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  businessName: string;
  projectDetails: string;
}
