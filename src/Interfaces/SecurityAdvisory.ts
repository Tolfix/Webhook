export interface SecurityAdvisory {
    ghsa_id:         string;
    summary:         string;
    description:     string;
    severity:        string;
    identifiers:     Identifier[];
    references:      Reference[];
    published_at:    string;
    updated_at:      string;
    withdrawn_at:    null;
    vulnerabilities: Vulnerability[];
}

export interface Identifier {
    value: string;
    type:  string;
}

export interface Reference {
    url: string;
}

export interface Vulnerability {
    package:                  Package;
    severity:                 string;
    vulnerable_version_range: string;
    first_patched_version:    FirstPatchedVersion;
}

export interface FirstPatchedVersion {
    identifier: string;
}

export interface Package {
    ecosystem: string;
    name:      string;
}